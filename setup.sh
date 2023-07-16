if [ ! -d venv ]
then
  python3 -m venv venv
fi
. venv/bin/activate

# upgrade pip
python3 -m pip install --upgrade pip #added python-m for pip installs (source setup overwrite for venv)

# install requirements
python3 -m pip install -r requirements.txt