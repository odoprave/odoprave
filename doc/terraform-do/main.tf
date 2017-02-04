provider "digitalocean" {
  # You need to set this in your .bashrc
  # export DIGITALOCEAN_TOKEN="Your API TOKEN"
}

resource "digitalocean_tag" "tag" {
  name = "${var.config.["name"]}"
}

resource "digitalocean_droplet" "droplet" {
  image     = "${var.config.["image"]}"
  name      = "${var.config.["name"]}"
  region    = "${var.config.["region"]}"
  size      = "${var.config.["size"]}"
  user_data = "${file("${var.config.["user_data"]}")}"
  ssh_keys  = "${var.ssh_keys}"
  tags      = ["${digitalocean_tag.tag.id}"]
}
