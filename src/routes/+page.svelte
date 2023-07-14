<script lang="ts">
    import DocumentInput from "$lib/components/DocumentInput.svelte";
    import DocumentRender from "$lib/components/DocumentRender.svelte";
    import {browser} from "$app/environment";
    import {localStore} from "$lib/stores/local";
    import {writable} from "svelte/store";
    import {debounce} from "$lib";

    const defaultText = {
        text: "#HELLO\n" +
            "##HELLO\n" +
            "###HELLO\n" +
            "####HELLO\n" +
            "#####HELLO\n" +
            "######HELLO\n" +
            "\n" +
            "```\n" +
            "def code():\n" +
            "  print(\"yeah this is python for sure lets gooo\")\n" +
            "```\n" +
            "\n" +
            "=> https://google.com this is a link :D\n" +
            "\n" +
            "> this is a quote"
    }

    const content = browser ? localStore("gmi-viewer:content", defaultText) : writable(defaultText)
    const handleUpdate = debounce((e) => $content.text = e.detail, 100)
</script>

<main>
    <section>
        <header>Input</header>
        <div class="section-content">
            <DocumentInput content="{$content.text}" on:update={handleUpdate}/>
        </div>
    </section>
    <section>
        <header>Output</header>
        <div class="section-content">
            <DocumentRender content="{$content.text}"/>
        </div>
    </section>
</main>