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
$Env:AWS_SECRET_ACCESS_KEY="ROLE_ID"
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
 
## PRIMER DESPLIEGUE.
Para nuestro primer despliegue usaremos los siguientes recursos:
- [Deployment][df2].

## EL TIMÓN DE KUBERNETES (HELM).
 ```sh
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm repo add eks https://aws.github.io/eks-charts
```

   [df1]: <https://aws.amazon.com/es/cloudformation/>
   [df2]: <https://github.com/Recad/eks-hands-on/blob/master/Cloudformation/ekstemplate.yaml>
   [df3]: <https://github.com/Recad/eks-hands-on>
 