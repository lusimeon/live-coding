// @link https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBQaXhlbGVkJTIwc3VucmlzZSUyMGJ5JTIwbHVzaW1lb24lMEElMEF2YXIlMjBzdW5yaXNlX2NvbG9yJTIwJTNEJTIwJTVCMC4yJTJDMC41JTVELnNtb290aCgpJTNCJTBBdmFyJTIwc3VucmlzZV9iZyUyMCUzRCUyMCU1QjAuMSUyQzAuMyU1RCUzQiUwQSUwQXNvbGlkKDAuMiUyQzAuMiUyQzApLmJyaWdodG5lc3MoKCklMjAlM0QlM0UlMjBNYXRoLnNpbih0aW1lKSUyMColMjAwLjMzKSUwQSUyMCUyMC5hZGQoc3JjKG8xKSklMEElMjAlMjAuYWRkKHNyYyhvMikpJTBBJTIwJTIwLmFkZChzcmMobzMpKSUwQSUyMCUyMC5waXhlbGF0ZSg0MDApJTBBJTIwJTIwLm91dChvMCklMEElMEFub2lzZSgyKSUwQSUwOS5tYXNrKCUwQSUwOSUwOXNoYXBlKDUlMkMlMjAlNUIwLjIlMkMwLjMlNUQuZmFzdCgpLnNtb290aCgpKSUwQSUyMCUyMCUwOSUwOSUwOS5jb2xvcihzdW5yaXNlX2NvbG9yJTJDc3VucmlzZV9jb2xvciUyQzApJTBBJTA5JTA5JTA5LnJvdGF0ZSgoKSUzRCUzRXRpbWUlMjUzNjApJTBBJTA5JTA5JTA5Lm91dChvMSklMEElMDkpJTBBJTBBZ3JhZGllbnQoKSUwQSUwOS5tYXNrKHNoYXBlKDQpLnNjcm9sbFkoNCUyQ01hdGguc2luKHRpbWUpKjAuNSkpJTBBLm91dChvMiklMEElMEFub2lzZSgxMCklMEElMDkubWFzayglMEElMDklMDlzaGFwZSg0JTJDMC4xKS5yZXBlYXQoMyUyQyUyMDIpLnNjcm9sbFgoMiUyQzEpJTA5JTBBJTA5KSUwQS5vdXQobzMpJTBBJTBBcmVuZGVyKG8wKQ%3D%3D

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Pixeled sunrise by lusimeon

var sunrise_color = [0.2,0.5].smooth();
var sunrise_bg = [0.1,0.3];

solid(0.2,0.2,0).brightness(() => Math.sin(time) * 0.33)
  .add(src(o1))
  .add(src(o2))
  .add(src(o3))
  .pixelate(400)
  .out(o0)

noise(2)
	.mask(
		shape(5, [0.2,0.3].fast().smooth())
  			.color(sunrise_color,sunrise_color,0)
			.rotate(()=>time%360)
			.out(o1)
	)

gradient()
	.mask(shape(4).scrollY(4,Math.sin(time)*0.5))
.out(o2)

noise(10)
	.mask(
		shape(4,0.1).repeat(3, 2).scrollX(2,1)	
	)
.out(o3)

render(o0)
