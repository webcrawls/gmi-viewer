export const geminiParser = (input: string) => {
    const lines = input.split("\n")

    const asHtml = (): string => {
        let output = "";
        let preformatted = false;

        for (const line of lines) {
            if (line.startsWith("=>")) {
                output += parseLinkLine(line)
            } else if (line.startsWith("```")) {
                if (!preformatted) {
                    preformatted = true;
                    output += "<pre>"
                } else {
                    preformatted = false;
                    output += "</pre>"
                }
            } else if (line.startsWith("#")) {
                output += parseHeadingLine(line)
            } else if (line.length) {
                output += `<p>${line}</p>`
            }

            if (!preformatted) output += "<br>"
        }

        return output;
    }

    return {asHtml}
}

// section 5.4.1
const parseTextLine = (input: string): string => input

// section 5.4.2
const parseLinkLine = (input: string): string => input

// section 5.4.3
const parsePreformattedToggleLine = (input: string): string => input

// section 5.4.4
const parsePreformattedTextLine = (input: string): string => input

// section 5.5.1
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

// section 5.5.2
const parseUnorderedListLine = (input: string): string => input

// section 5.5.3
const parseQuoteLine = (input: string): string => input