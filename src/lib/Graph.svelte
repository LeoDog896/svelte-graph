<script lang="ts">
  import { onMount } from "svelte";
  import { between, location } from "$lib/math"
  import { type Position, add, mul, single } from "$lib/position"

  export let width = 600;
  export let height = 600;
  export let dragStrength = 0.04
  export let draggable = true;

  export let classes: string = "";
 
  export let min: Position = { x: -10, y: -10 };
  export let max: Position = { x: 10, y: 10 };

  let dragging = false;
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

    context.clearRect(0, 0, width, height)

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

  function mousemove(event: MouseEvent) {
    if (!draggable || !dragging) return;

    const delta = { x: event.movementX, y: event.movementY };

    const deltaStrength = mul(delta, single(-dragStrength))

    min = add(min, deltaStrength)
    max = add(max, deltaStrength)

    draw()
  }

  onMount(() => {
    draw()
  })
</script>

<canvas 
  on:mousedown={() => { dragging = true }}
  on:mouseup={() => { dragging = false }}
  on:mousemove={mousemove}
  class="{classes}" bind:this={canvas} {width} {height}
></canvas>