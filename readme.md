# EKS HANDS ON REPO
## _KUBERNETES + AWS_

A continuación, encontraras una serie de recursos que facilitara tus primeros pasos con Amazon EKS, desde platillas para desplegar tu propio Cluster hasta comandos útiles y consejos. 

## Desplegar nuestro primer Cluster de EKS.
Para el despliegue de nuestro cluster utilizaremos [Cloudformation][df1]. El Template lo encontraras en el siguiente enlace.
- [Template de Cloudformation][df2].

Si quieres ver que se va a desplegar en tu cuenta puede darle un vistazo a [este][df3] enlace.


## COMANDOS ÚTILES.
- Para conectarse a un clúster de EKS debes tener instalado el CLI de AWS, de preferencia la versión 2, y tener configuradas las credenciales de AWS como variables de entorno o directamente en el CLI.
- Ciertos comandos requieren que tengas instaladas las herramientas Kubectl, Helm y Istioctl
---

 ***Setear AWS Env vars para CLI en POWERSHELL***
 ```sh
$Env:AWS_ACCESS_KEY_ID="USER_ID"
$Env:AWS_SECRET_ACCESS_KEY="SECRET_ACCESS_KEY"
```

***Asumir un rol***
 ```sh
aws sts assume-role --role-arn <role_arn> --role-session-name <session_name>
```
***Setear las credenciales de mi role para usar eks (POWERSHELL)***
 ```sh
$Env:AWS_ACCESS_KEY_ID="ROLE_ID"
$Env:AWS_SECRET_ACCESS_KEY="ROLE_ACCESS_KEY"
$Env:AWS_SESSION_TOKEN="TOKEN"
```
 ***¿Como me conecto a mi cluster de EKS?***
 ```sh
aws eks --region <Region> update-kubeconfig --name <cluster-name>
```
 ***¿Como veo el usuario o rol usado para la ejecución de mis comandos de CLI?***
 ```sh
aws sts get-caller-identity
```
***¿Como ejecuto mi stack?***
```sh
aws cloudformation create-stack --stack-name <nombre_stack> --capabilities CAPABILITY_NAMED_IAM --template-body file://users-template.yaml  --parameters "ParameterKey=Nombre, ParameterValue=<mi_nombre>"
```

## PRIMER DESPLIEGUE.
Para nuestro primer despliegue usaremos los siguientes recursos:
- [Deployment][df2].

## EL TIMÓN DE KUBERNETES (HELM).
 ```sh
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm repo add eks https://aws.github.io/eks-charts
```

## SERVICEACCOUNT.

***¿como creo veo mi oidc issuer?***
```sh
aws eks describe-cluster --name <mi_cluster_name> --query "cluster.identity.oidc.issuer" --output text
```

***¿como uso mi oidc issuer para mi cluster?***
```sh
eksctl utils associate-iam-oidc-provider --cluster <mi cluster> --approve
```

***¿como uso creo un rol para que lo asuman los pods?***
```sh
aws iam create-role --role-name <IAM_ROLE_NAME> --assume-role-policy-document file://trust.json --description "<IAM_ROLE_DESCRIPTION>"
```

***¿como añado una politica a mi rol?***
```sh
aws iam attach-role-policy --role-name <IAM_ROLE_NAME> --policy-arn=arn:aws:iam::692137641826:policy/dynamodbFull-eks
```

***¿como firmo un serviceaccount para que use mi rol?***
```sh
kubectl annotate serviceaccount -n <namespace> <serviceaccountname> eks.amazonaws.com/role-arn=arn:aws:iam::692137641826:role/<role_name>
```

## ECR.
***¿Como me logueo al registry de aws?***
```sh
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 692137641826.dkr.ecr.us-east-1.amazonaws.com
```
***Para  construir mi imagen***
```sh
docker build -t 692137641826.dkr.ecr.us-east-1.amazonaws.com/ekshandson:<mi_nombre> .
```
***Para  subir mi imagen***
```sh
docker push 692137641826.dkr.ecr.us-east-1.amazonaws.com/ekshandson:<mi_nombre>
```

   [df1]: <https://aws.amazon.com/es/cloudformation/>
   [df2]: <https://github.com/Recad/eks-hands-on/blob/master/Cloudformation/ekstemplate.yaml>
   [df3]: <https://github.com/Recad/eks-hands-on>
 