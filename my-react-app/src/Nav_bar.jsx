
import { Vector } from "./assets/react.svg"

export const Nav = () => {
    return (
        <div className="w-[1444px] h-[125px]">
            <div className="fixed w-[1444px] h-[125px] top-0 left-0">
                <div className="relative w-[1440px] h-[123px] top-0.5 left-px bg-[url(/rectangle-9.svg)] bg-[100%_100%]">
                    <div className="relative w-[1295px] h-[41px] top-[46px] left-[73px]">
                        <Vector className="!-left-px" />
                        <div className="inline-flex items-center justify-center gap-[30px] absolute top-[9px] left-[948px]">
                            <div className="relative w-fit mt-[-1.00px] transition-all duration-[0.15s] ease-[ease] [font-family:'Fira_Code-Light',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                                About Me
                            </div>
                            <div className="relative w-fit mt-[-1.00px] transition-all duration-[0.15s] ease-[ease] [font-family:'Fira_Code-Light',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                                Work
                            </div>
                            <div className="relative w-fit mt-[-1.00px] transition-all duration-[0.15s] ease-[ease] [font-family:'Fira_Code-Light',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                                Resume
                            </div>
                            <div className="relative w-fit mt-[-1.00px] transition-all duration-[0.15s] ease-[ease] [font-family:'Fira_Code-Light',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav