#Imagen Base
FROM python


ARG region=us-east-1
ENV AWS_DEFAULT_REGION=$region

WORKDIR /home/
COPY ./job.py /home/

RUN pip3 install boto3
