# ASM on RASPI

to setup an Rasbian dev environment


```
	apt-get install qemu-user-static
	docker run -ti --volume /usr/bin/qemu-arm-static:/usr/bin/qemu-arm-static philipz/rpi-raspbian bash
```
