<script lang="ts">
  import { onMount } from "svelte";

  interface Position {
    x: number;
    y: number;
  }

  export let center: Position = { x: 0, y: 0 };
  export let xMin = -10;
  export let xMax = 10;
  export let yMin = -10;
  export let yMax = 10;
  /** Major step (units) */
  export let stepMajor = 1;
  export let minorAmount = 1

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const context = canvas.getContext("2d")

    if (!context) return

    context.strokeStyle = "black";

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 0);
    context.stroke();
  });
</script>

<canvas bind:this={canvas}></canvas>