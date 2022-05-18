<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const context = canvas.getContext("2d")

    if (!context) return

    context.moveTo(0, 0);
    context.lineTo(200, 200);
  });
</script>

<canvas bind:this={canvas}></canvas>