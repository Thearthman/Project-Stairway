---
{"dg-publish":true,"permalink":"/IOAI/MuJoCo Setup - macOS/"}
---


# 1. Install Mujoco 3.3.2
## 1.1 Download DMG Image

Download the .dmg file from the official release page:
[MuJoCo macOS Installer (3.3.2)](https://github.com/google-deepmind/mujoco/releases/download/3.3.2/mujoco-3.3.2-macos-universal2.dmg)


## 1.2 Choose Working Directory
 
After opening the .dmg file, you should see the following:
![Pasted image 20250514204427.png](/img/user/Attachments/Pasted%20image%2020250514204427.png)

Select a folder of your choice and move **all contents** from the .dmg to that folder.
> **This folder will serve as your working directory**, and will be referred to as such throughout the rest of this guide.


<div style="page-break-after: always;"></div>

# 2. Setup Conda 
## 2.1 Install Conda
> Refer to the official [Miniconda Installation Guide](https://www.anaconda.com/docs/getting-started/miniconda/install) if needed.

Run the following commands in your terminal to install Miniconda:
```sh
mkdir -p ~/miniconda3   
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh   
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3   
rm ~/miniconda3/miniconda.sh  
source ~/miniconda3/bin/activate  
```
## 2.2 Configure Conda Channels

Add the conda-forge channel for reliable package versions (copy and run in terminal):
```sh
conda config --prepend channels conda-forge
```

## 2.3 Create and Set Up Virtual Environment
```sh
conda create -n robosuite python=3.10  
conda init --all  
conda activate robosuite  
conda install mujoco  
python -m pip install mujoco
```

> **Note**: You must run `conda activate robosuite` **EVERYTIME** you open a new terminal session.
> To avoid repeating this, add `conda activate robosuite` to your shell configuration file (e.g., ~/.bashrc or ~/.zshrc).


<div style="page-break-after: always;"></div>

# 3. Install Robosuite
>This section follows the **“Install from Source”** method described in the [official robosuite documentation](https://robosuite.ai/docs/installation.html).  

## 3.1 Download and Organise Robosuite
- Download the source code: [robosuite v1.5.1 ZIP Archive](https://github.com/ARISE-Initiative/robosuite/archive/refs/tags/v1.5.1.zip)   
- Unzip the archive and **move the extracted folder** into your **working directory**.

Your working directory should now contain the following structure:  
![Pasted image 20250514204834.png](/img/user/Attachments/Pasted%20image%2020250514204834.png)

## 3.2 Install Dependencies
Open a terminal inside the robosuite-1.5.1 directory.

1. First, locate your mjpython (only macOS uses this) interpreter:
```sh
which mjpython
```

2. Copy the output path. Then, set up an alias:
```sh
alias mjpython = "the result of the last command"
```

3. Install robosuite dependencies:
```sh
mjpython -m pip install -r requirements.txt
mjpython -m pip install -r requirements-extra.txt
```

> **Note**: You must run `alias mjpython = "the result of the last command"` **EVERYTIME** you open a new terminal session.
> To avoid repeating this, add `alias mjpython = "the result of the last command"` to your shell configuration file (e.g., ~/.bashrc or ~/.zshrc).

<div style="page-break-after: always;"></div>

# 4. Test Your Environment

To verify the setup, navigate to your <u>working directory</u> and run a demo:
```sh
cd robosuite-1.5.1
mjpython robosuite/demos/demo_device_control.py --device keyboard
```
> **NOTE**: You may need to give Terminal full keyboard access.

**Congratulations!** Your environment is now successfully configured.