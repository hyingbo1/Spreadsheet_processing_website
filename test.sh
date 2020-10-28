
#!/bin/bash
cd ~
cd ~/shibiao


pgrep gunicorn | xargs kill -s 9
pgrep nginx | xargs kill -s 9
sudo service nginx restart
gunicorn -w1 -b 127.0.0.1:8080 shibiao.wsgi


