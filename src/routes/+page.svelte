<script lang="ts">
    import DocumentInput from "$lib/components/DocumentInput.svelte";
    import DocumentRender from "$lib/components/DocumentRender.svelte";
    import {browser} from "$app/environment";
    import {localStore} from "$lib/stores/local";
    import {writable} from "svelte/store";

    const content = browser ? localStore("gmi-viewer:content", {text: "Hello!"}) : writable({text: "Hello!"})
</script>

<main>
    <section>
        <header>Input</header>
        <div class="section-content">
            <DocumentInput content="{$content.text}" on:update={(e) => $content.text = e.detail}/>
        </div>
    </section>
    <section>
        <header>Output</header>
        <div class="section-content">
            <DocumentRender content="{$content.text}"/>
        </div>
    </section>
</main>