import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import { techStack } from "@constants";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@shobhit % </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li className="flex items-start" key={category}>
                            <Check className="check mt-0.5" size={20} />
                            <h3>{category}</h3>
                            <p className="technologies">
                                {items.join(', ')}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} /> {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                    </p>

                    <p className="render-time">
                        <Flag size={15} fill="#a3a3a3" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;