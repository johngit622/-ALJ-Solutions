import logo from "../assets/logo2.png";

export function LogoLockup() {
  return (
    <a href="#home" className="inline-flex items-center gap-3">
      <img src={logo} alt="" className="h-11 w-11 object-contain" />
      <span>
        <span className="block font-display text-xl font-bold text-white">
          ALJ
        </span>
        <span className="block text-[10px] tracking-[0.28em] text-slate-400 uppercase">
          Solutions
        </span>
      </span>
    </a>
  );
}
