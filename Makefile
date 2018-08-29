NAME		:= deploymentking/kops-node-app
GIT_HASH	:= $$(git log -1 --pretty=%h)
FILE_VER	:= $$(cat .version)
IMG			:= ${NAME}:${GIT_HASH}
VERSION		:= ${NAME}:${FILE_VER}
LATEST		:= ${NAME}:latest

build:
	@echo "Building version ${FILE_VER}"
	@docker build -t ${IMG} .
	@docker tag ${IMG} ${LATEST}
	@docker tag ${IMG} ${VERSION}

push:
	@docker push ${VERSION}
	@docker push ${LATEST}

login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASSWORD}