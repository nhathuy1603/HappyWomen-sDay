function _(key){
    return document.getElementById(key);
    }

function container_move(callback){
    _("shell").style.transform = _("shell").style.transform == "translateX(0%)" ? "translateX(-50%)" : "translateX(0%)";
    setTimeout(callback, 500);
    }

function open_card(){
    _("container").style.transform = _("container").style.transform == "rotateX(0deg)" ? "rotateX(40deg)" : "rotateX(0deg)";
    _("box1").style.transform = _("box1").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
  _("box1_back").style.transform = _("box1_back").style.transform == "rotate3d(0, 1, 0, -180deg)" ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, -180deg)";
_("tn").innerHTML = _("tn").innerHTML=="text" ? "surprise" : "text";
  }	