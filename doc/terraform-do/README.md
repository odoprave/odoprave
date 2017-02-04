# Terraform odoprave DO konfigurácia

Základný Digital Ocean droplet (5$ za mesiac, 1CPU, 512MB RAM, 1TB traffic) 
je úplne postačujúci na beh alternatívneho odoprave.

Najprv potrebujete vyexportovať Digital Ocean API token ako environment 
premennú:

    export DIGITALOCEAN_TOKEN="Put Your Token Here" 

Potom skontrolovať plán a spustiť provisioning:

    terraform plan
    terraform apply

