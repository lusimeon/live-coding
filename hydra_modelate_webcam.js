// @link https://hydra.ojack.xyz/?code=Y29uc3QlMjByb3RhdGVTcGVlZCUyMCUzRCUyMDAuNCUzQiUwQSUwQXMwLmluaXRDYW0oKSUzQiUwQSUwQXNoYXBlKDYpJTBBJTA5LnJvdGF0ZSgoKSUyMCUzRCUzRSUyMHRpbWUlMjAlMjUlMjAzNjAlMjAqJTIwcm90YXRlU3BlZWQlMjAqJTIwLTIpJTBBJTA5LnN1YiglMEElMjAlMjAlMDklMDlzaGFwZSg2KSUwQSUyMCUyMCUwOSUwOSUwOS5zY2FsZSglNUIwLjElMkMlMjAwLjklNUQuc21vb3RoKCkpJTBBJTA5JTA5JTA5LnJvdGF0ZSgoKSUyMCUzRCUzRSUyMHRpbWUlMjAlMjUlMjAzNjAlMjAqJTIwcm90YXRlU3BlZWQpJTBBJTA5KSUwQSUwOS5yZXBlYXQoMiUyQyUyMDMpJTBBJTA5LmthbGVpZCglNUIyJTJDJTIwMyU1RC5zbW9vdGgoKSklMEElMDkucm90YXRlKCgpJTIwJTNEJTNFJTIwdGltZSUyMCUyNSUyMDM2MCUyMColMjByb3RhdGVTcGVlZCklMEElMDkub3V0KG8xKSUwQSUwQXNyYyhzMCklMEElMDkucGl4ZWxhdGUoNTAwKSUwQSUwOS5jb250cmFzdCgtMi41KSUwQSUwOS5vdXQobzIpJTBBJTBBdm9yb25vaSgxMCUyQyUyMDIlMkMlMjAwKSUwQSUwOS5vdXQobzMpJTBBJTBBc3JjKG8zKSUwQSUwOS5hZGQoZ3JhZGllbnQoNCkpJTBBJTA5Lm1hc2sobzEpJTBBJTA5LmJsZW5kKG8yKSUwQSUwOS5tb2R1bGF0ZVBpeGVsYXRlKG5vaXNlKDElMkMlMjAwLjMlMjAqJTIwKDElMjAlMkIlMjByb3RhdGVTcGVlZCkpJTJDJTIwMjAwJTJDJTIwMTApJTBBJTA5Lm91dChvMCklMEElMEFyZW5kZXIobzAp

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Modulate webcam by lusimeon

const rotateSpeed = 0.4;

s0.initCam();

shape(6)
	.rotate(() => time % 360 * rotateSpeed * -2)
	.sub(
  		shape(6)
  			.scale([0.1, 0.9].smooth())
			.rotate(() => time % 360 * rotateSpeed)
	)
	.repeat(2, 3)
	.kaleid([2, 3].smooth())
	.rotate(() => time % 360 * rotateSpeed)
	.out(o1)

src(s0)
	.pixelate(500)
	.contrast(-2.5)
	.out(o2)

voronoi(10, 2, 0)
	.out(o3)

src(o3)
	.add(gradient(4))
	.mask(o1)
	.blend(o2)
	.modulatePixelate(noise(1, 0.3 * (1 + 	rotateSpeed)), 200, 10)
	.out(o0)

render(o0)