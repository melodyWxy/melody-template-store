FROM registry.shdocker.tuya-inc.top/mirror/nginx:1.15.0

ADD .docker/nginx.conf /etc/nginx/conf.d/default.conf
ADD .docker /
COPY dist /www

RUN chmod -R 755 /www
CMD [ "sh", "/entrypoint.sh" ]
