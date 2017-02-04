# Puppet odoprave konfigurácia

Puppet odoprave konfigurácia na inšpiráciu:

```
# Used Puppet module - https://github.com/garethr/garethr-docker

class { 'docker':
  version => 'latest',
}->
docker::image { 'odoprave/odoprave':
  image_tag => 'latest',
}->
docker::run { 'odoprave':
  image            => 'odoprave/odoprave',
  pull_on_start    => true,
  extra_parameters => ['--restart=unless-stopped'],
  ports            => ['80'],
}
```
