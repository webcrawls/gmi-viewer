export const geminiParser = (input: string) => {
    const lines = input.split("\n")

    const asHtml = (): string => {
        let output = "";
        let preformatted = false;
        let quoted = false;

        for (let line of lines) {
            if (line.startsWith(">")) {
                quoted = true;
                line = line.slice(1)
                output += "<blockquote>"
            } else if (quoted && !line.startsWith(">")) {
                quoted = false;
                output += "</blockquote>"
            }

            if (line.startsWith("=>")) {
                // link line, section 5.4.2
                output += parseLinkLine(line)
            } else if (line.startsWith("```")) {
                // preformatted line, sections 5.4.3 & 5.4.4
                if (!preformatted) {
                    preformatted = true;
                    output += "<pre>"
                } else {
                    preformatted = false;
                    output += "</pre>"
                }
            } else if (line.startsWith("#")) {
                // heading line, section 5.5.1
                output += parseHeadingLine(line)
            } else if (line.length) {
                // text line, section 5.4.1
                output += `<p>${line}</p>`
            }
        }

        return output;
    }

    return {asHtml}
}

const parseLinkLine = (input: string): string => {
    const cleaned = input
        .slice(2) // remove =>
        .trim() // remove leading space

    const spaceIndex = cleaned.indexOf(" ")
    const url = cleaned.slice(0, spaceIndex)
    const name = cleaned.slice(spaceIndex + 1)

    return `<a href="${url}" alt="${name}">${name}</a>`
}

const parseHeadingLine = (input: string): string => {
    console.log("heading: " + input)
    let headingLevel = 0;
    let contentStartIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const c = input[i]

        if (c === '#') {
            headingLevel += 1;
        } else if (c === ' ') {
            continue;
        } else {
            contentStartIndex = i;
            break;
        }
    }

    return `<h${headingLevel}>${input.slice(contentStartIndex)}</h${headingLevel}>`
}

// todo
// // section 5.5.2
// const parseUnorderedListLine = (input: string): string => input
//
// // section 5.5.3
// const parseQuoteLine = (input: string): string => input