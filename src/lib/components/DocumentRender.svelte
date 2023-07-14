<script lang="ts">
    import {geminiParser} from "$lib";

    export let content: string
</script>

{@html geminiParser(content).asHtml()}