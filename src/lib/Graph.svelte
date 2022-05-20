<script lang="ts">
  import { onMount } from "svelte";
  import { between, location } from "$lib/math";
  export interface Position {
    x: number;
    y: number;
  }

  export let width = 600;
  export let height = 600;

  export let classes: string = "";
 
  export let min: Position = { x: -10, y: -10 };
  export let max: Position = { x: 10, y: 10 };

  let canvas: HTMLCanvasElement;

  const drawLine = (from: Position, to: Position, context: CanvasRenderingContext2D) => {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke()
  }

  const draw = () => {
    const context = canvas.getContext("2d")
    if (!context) return

    context.strokeStyle = "black";

    // Draw the major X axis
    if (between(min.y, max.y, 0)) {
      const yLocation = location(min.y, max.y, 0);
      if (yLocation == undefined) return; // min.y == max.y dont even bother the schenanigans are unknown
      const renderLocation = yLocation * height;
      drawLine({ x: 0, y: renderLocation }, { x: width, y: renderLocation }, context)
    }

    // Draw the major Y axis
    if (between(min.x, max.x, 0)) {
      const xLocation = location(min.x, max.x, 0);
      if (xLocation == undefined) return; // same as last major
      const renderLocation = xLocation * width;
      drawLine({ x: renderLocation, y: 0 }, { x: renderLocation, y: height }, context)
    }
  };

  onMount(() => {
    draw()
  })
</script>

<canvas class="{classes}" bind:this={canvas} {width} {height}></canvas>