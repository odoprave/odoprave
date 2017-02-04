# Ansible odoprave konfigurácia

Ansible odoprave konfigurácia na inšpiráciu:

```
# Used Core Docker module - http://docs.ansible.com/ansible/docker_module.html

- name: odoprave container
  docker:
    name: odoprave
    image: odoprave/odoprave:latest
    state: started
    restart_policy: unless-stopped
    pull: always
    ports:
    - "80:80" 
```
