let commands = document.querySelector('.commands');

arch = () => commands.innerText = "sudo pacman -S bspwm sxhkd maim xclip picom ttf-font-awesome  ";

deb = () => commands.innerText ="sudo apt install bspwm sxhkd maim xclip fonts-font-awesome ";

voidd = () => commands.innerText ="sudo xbps install bspwm sxhkd maim polybar xclip picom font-awesome5 font-awesome  ";

fed = () => commands.innerText ="sudo dnf install bspwm sxhkd maim xclip picom fontawesome-fonts  ";
