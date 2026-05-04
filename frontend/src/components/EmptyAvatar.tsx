

export type EmptyAvatarProps = {
    name: string;
    className?: string;
}

const avatarColors = [
    { bg: "bg-red-100", border: "border-red-500", text: "text-red-600" },
    { bg: "bg-orange-100", border: "border-orange-500", text: "text-orange-600" },
    { bg: "bg-amber-100", border: "border-amber-500", text: "text-amber-600" },
    { bg: "bg-yellow-100", border: "border-yellow-500", text: "text-yellow-600" },
    { bg: "bg-lime-100", border: "border-lime-500", text: "text-lime-600" },
    { bg: "bg-green-100", border: "border-green-500", text: "text-green-600" },
    { bg: "bg-emerald-100", border: "border-emerald-500", text: "text-emerald-600" },
    { bg: "bg-teal-100", border: "border-teal-500", text: "text-teal-600" },
    { bg: "bg-cyan-100", border: "border-cyan-500", text: "text-cyan-600" },
    { bg: "bg-sky-100", border: "border-sky-500", text: "text-sky-600" },
    { bg: "bg-blue-100", border: "border-blue-500", text: "text-blue-600" },
    { bg: "bg-indigo-100", border: "border-indigo-500", text: "text-indigo-600" },
    { bg: "bg-violet-100", border: "border-violet-500", text: "text-violet-600" },
    { bg: "bg-purple-100", border: "border-purple-500", text: "text-purple-600" },
    { bg: "bg-fuchsia-100", border: "border-fuchsia-500", text: "text-fuchsia-600" },
    { bg: "bg-pink-100", border: "border-pink-500", text: "text-pink-600" },
    { bg: "bg-rose-100", border: "border-rose-500", text: "text-rose-600" },
    { bg: "bg-slate-100", border: "border-slate-500", text: "text-slate-600" },
    { bg: "bg-gray-100", border: "border-gray-500", text: "text-gray-600" },
    { bg: "bg-zinc-100", border: "border-zinc-500", text: "text-zinc-600" },
    { bg: "bg-neutral-100", border: "border-neutral-500", text: "text-neutral-600" },
    { bg: "bg-stone-100", border: "border-stone-500", text: "text-stone-600" },
];

function getColorFromName(name: string) {
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return avatarColors[hash % avatarColors.length];
}

function getShortName(name: string) {
    const parts = name.trim().split(/\s+/);

    if (!parts[0]) return "NA";

    if(parts[0][0] === "+") return parts[0];

    if (parts.length === 1) {
        return parts[0].slice(0, 2);
    }

    return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function EmptyAvatar({name, className}: EmptyAvatarProps) {
    const color = getColorFromName(name);

    return (
        <div className={`flex items-center justify-center font-semibold
        h-full aspect-square rounded-full border-2 text-xl 
        ${className} ${color.bg} ${color.border} ${color.text}`}
        >
            {getShortName(name)}
        </div>
    );
}