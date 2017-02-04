variable "config" {
  description = "odoprave configuration map"

  default = {
    name      = "odoprave"
    region    = "fra1"
    image     = "ubuntu-16-04-x64"
    size      = "512mb"
    user_data = "do-odoprave-install-ubuntu-16.sh"
  }
}

variable "ssh_keys" {
  default     = ["my-ssh-key-id"]
  description = "Approved DO ssh keys for ssh connections"
}
