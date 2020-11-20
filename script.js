let commands = document.querySelector('.commands');

arch = () => commands.innerText = "sudo pacman -S bspwm sxhkdo rofi  feh maim xclip picom ttf-font-awesome  " ;

deb = () => commands.innerText ="sudo apt install bspwm rofi sxhkd feh maim xclip fonts-font-awesome ";

voidd = () => commands.innerText ="sudo xbps install rofi bspwm sxhkd feh maim polybar xclip picom font-awesome5 font-awesome  ";

fed = () => commands.innerText ="sudo dnf install  rofi bspwm sxhkd feh maim xclip picom fontawesome-fonts  ";


