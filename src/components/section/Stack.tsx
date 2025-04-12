interface StackItem {
    name: string;
    category: string;
}

const stack: StackItem[] = [
    { name: 'React JS', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'bun', category: 'backend' },
    { name: 'deno', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'Go', category: 'backend' },
    { name: 'MySQL', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'IBM DB2', category: 'database' },
    { name: 'InfluxDB', category: 'database' },
    { name: 'Tailwind CSS', category: 'styling' },
    { name: 'Chakra UI', category: 'styling' },
    { name: 'Material UI', category: 'styling' },
    { name: 'ShadCN UI', category: 'styling' },
    { name: 'Bootstrap', category: 'styling' },
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'Golang', category: 'language' },
    { name: 'daisyUI', category: 'styling' },
    { name: 'mariaDB', category: 'database' },
    { name: 'Radix UI', category: 'styling' },
    { name: 'Prisma', category: 'database' },
    { name: 'SQL', category: 'language' },
    { name: 'hono' , category: 'backend' },
    { name: 'ExpressJS', category: 'backend' },
    { name: 'svelte', category: 'frontend' },
    { name: 'dart', category: 'language' },
    { name: 'Figma', category: 'design' },
    { name: 'Canva', category: 'design' },
    { name: 'GitHub', category: 'tools' },
    { name: 'GitLab', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Vercel', category: 'tools' },
];


export default function Stack() {
    const categorizedStack = stack.reduce<Record<string, StackItem[]>>((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <section id="stack">
            <h1 className="text-yellow text-[20px] font-semibold">Development Stack</h1>
            <div>
                {Object.entries(categorizedStack).map(([category, items]) => (
                    <div key={category} className="mt-4">
                        <h2 className="text-white capitalize">{category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <span key={item.name} className="text-gray bg-gray-900 p-1 rounded-md">
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
