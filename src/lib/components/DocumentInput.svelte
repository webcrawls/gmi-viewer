<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let content: string

    const dispatch = createEventDispatcher()

    const handleKeyDown = (event: KeyboardEvent) => {
        const text = event.target.innerText;
        dispatch("update", text)
    }
</script>

<div class="text-input" contenteditable="true" on:input={handleKeyDown}>
    {content}
</div>