output "Public IP odoprave" {
  value = "${digitalocean_droplet.droplet.ipv4_address}"
}
