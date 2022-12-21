RUN_BACKEND:
	echo "Run Backend"
	cd ./backend &&\
 	npm run dev


RUN_INTERNAL:
	echo "Run Internal"
	cd ./internal-client &&\
 	npm run dev


RUN_PUBLIC:
	echo "Run Frontend"
	cd ./public-client &&\
 	npm run dev


RUN_DEV:
	echo "Run App"
	make RUN_BACKEND | \
	make RUN_INTERNAL |\
	make RUN_PUBLIC

