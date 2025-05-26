---
{"dg-publish":true,"permalink":"/IOAI/MuJoCo_Setup-Windows/"}
---


# 1. Setup Conda 
## 1.1 Install Conda
> Refer to the official [Miniconda Installation Guide](https://www.anaconda.com/docs/getting-started/miniconda/install) if needed.

Download the Miniconda Installer: [Miniconda3-Latest-Windows](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)  

1. Open the Installer, you should be greeted with this interface:  

![Screenshot 2025-05-21 210722.png](/img/user/Attachments/Screenshot%202025-05-21%20210722.png)
2. Keep everything default until you reach this page. SELECT `All Users (require admin privileges)` and select allow for the privilege system prompt.  

![Screenshot 2025-05-21 210734.png](/img/user/Attachments/Screenshot%202025-05-21%20210734.png)
3. Keep everything default until you reach this page. Select all three options and click `Install` on the lower right corner.  

![Screenshot 2025-05-21 210746.png](/img/user/Attachments/Screenshot%202025-05-21%20210746.png)  
4. Now your miniconda is installed, press `Windows` Key and type in `Anaconda Prompt`. Open the first option, it should look something like this(retry the installer or reboot if you don't see this):  

![Pasted image 20250521212500.png](/img/user/Attachments/Pasted%20image%2020250521212500.png)  
5. After opening it, you should be greeted by this:

![Pasted image 20250521212646.png](/img/user/Attachments/Pasted%20image%2020250521212646.png)  

6. Run the following commands in this window to initialise conda environment. You should be able to see a list files (path) that have been updated by conda.

```shell
conda init
```

7. Verify your conda environment by opening a Windows Powershell type `conda`. If your environment is good, you should see conda usage options displayed like below.  

![Pasted image 20250521213256.png](/img/user/Attachments/Pasted%20image%2020250521213256.png)  
## 1.2 Configure Conda Channels

Add the conda-forge channel for reliable package versions (copy and run in Windows Powershell):
```sh
conda config --prepend channels conda-forge
```

## 1.3 Create and Set Up Virtual Environment

1. Set up new conda environment and install Mujoco(copy and run in Windows Powershell):
```sh
conda create -n robosuite python=3.10  
conda init --all  
conda activate robosuite  
conda install mujoco  
python -m pip uninstall mujoco
python -m pip install mujoco
```
> **Note**: You must run `conda activate robosuite` **EVERYTIME** you open a new terminal session.
> To avoid repeating this, add `conda activate robosuite` to your shell configuration file (e.g., ~/.bashrc or ~/.zshrc).

2. Run `which python` in your PowerShell to determine the path of your robosuite python. Go to `Windows Settings -> System -> Display -> Graphics Card` and select Add Desktop Application. Choose the robosuite python you just found and add it. Set the GPU preference to High Performance (your dedicated GPU). 
![Pasted image 20250521215220.png](/img/user/Attachments/Pasted%20image%2020250521215220.png)  
{ #3c7bb6}


3. Now run `python -m mujoco.viewer` in PowerShell and you should be able to see MuJoCo running.  
![Pasted image 20250521215634.png](/img/user/Attachments/Pasted%20image%2020250521215634.png)  

<div style="page-break-after: always;"></div>

# 2. MuJoCo Installation
## 2.1 Download MuJoCo
1. Download the zip file from MuJoCo Github Release Page: [MuJoCo-3.3.2-windows-x86_64.zip](https://github.com/google-deepmind/mujoco/releases/download/3.3.2/mujoco-3.3.2-windows-x86_64.zip)

2. Unzip the archive (which contains the contents in the screenshot below) and **move all the extracted contents** into a folder called `MuJoCo`. Move the `MuJoCo` folder to a folder of your choice. I will from now on refer to this folder as the <u>working directory</u>.
![Pasted image 20250524002747.png](/img/user/Attachments/Pasted%20image%2020250524002747.png)

3. (Similar to [[IOAI/MuJoCo_Setup-Windows#^3c7bb6\|1.3 (Set Graphics Card)]]) Go to `Windows Settings -> System -> Display -> Graphics Card` and select `Add Desktop Application`. Choose the `simulate.exe` (located in `MuJoCo-Folder\bin`) and add it. Set the GPU preference to High Performance (your dedicated GPU).

4. Run `simulate.exe` from `\bin` and MuJoCo should pop up with proper UI. If UI glitches, retry setting `simulate.exe` to use your Nvidia dedicated GPU.

## 2.2 Add MuJoCo to PATH
Add `Path-To-Your-Working-Director\MuJoCo\bin` to your system environment variables (this tutorial follows this [guide](https://www.eukhost.com/kb/how-to-add-to-the-path-on-windows-10-and-windows-11/) online):
1. Press `Windows` key, type `env` and select following option.
  ![Pasted image 20250524001712.png](/img/user/Attachments/Pasted%20image%2020250524001712.png)
2. Click on `Environment Variables…` button.
  ![Pasted image 20250524001816.png](/img/user/Attachments/Pasted%20image%2020250524001816.png)
3. In the `System Variables` section, locate `Path`, and click `Edit`.
  ![Pasted image 20250524002135.png](/img/user/Attachments/Pasted%20image%2020250524002135.png)
4. In the `Edit environment variable` UI, click `New` to add the new path. You can also edit or reorder existing paths.
  ![Pasted image 20250524002201.png](/img/user/Attachments/Pasted%20image%2020250524002201.png)
5. Dismiss all dialogs by selecting `OK`. Your changes are saved.

<div style="page-break-after: always;"></div>

# 3. Install Robosuite
>This section follows the **“Install from Source”** method described in the [official robosuite documentation](https://robosuite.ai/docs/installation.html).  

## 3.1 Download and Organise Robosuite
1. Download the source code: [robosuite v1.5.1 ZIP Archive](https://github.com/ARISE-Initiative/robosuite/archive/refs/tags/v1.5.1.zip)  

2. Unzip the archive and **move the extracted contents** into a subfolder in your <u>working directory</u> (I named this folder `Robosuite`). Your `Robosuite` folder should now contain the following structure:  
![Pasted image 20250521221150.png](/img/user/Attachments/Pasted%20image%2020250521221150.png)  

## 3.2 Install Dependencies

1. Update your Microsoft Visual C++ to 14.0 or greater. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/ （vs_BuildTools.exe）
Install with the following options.
![Pasted image 20250521232506.png](/img/user/Attachments/Pasted%20image%2020250521232506.png)  

2. Open a PowerShell inside the your `Robosuite` folder directory OR run `cd Path-To-Your-Working-Director\Robosuite`. Install robosuite dependencies:

```sh
python -m pip install -r requirements.txt
python -m pip install -r requirements-extra.txt
```

<div style="page-break-after: always;"></div>

# 4. Test Your Environment

To verify the setup, navigate to your <u>working directory</u> and run a demo:
```sh
cd Path-To-Your-Working-Director\Robosuite
python robosuite/demos/demo_device_control.py --device keyboard
```

**Congratulations!** Your environment is now successfully configured.