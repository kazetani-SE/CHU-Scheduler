/**
 * COMPONENTS TEMPLATE
 * this is pure UI without logic
 */

// Object type used in local component
type Props = {
    title: string;
};

// Component with parameter (parameter is optional)
export default function ExampleCard({ title }: Props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-red-500 font-bold">{title}</h2>
            <p className="text-green-500">Remove this page and component when start coding</p>
        </div>
    );
}

/**
 * RULES: just take parameter and render UI
 * - Does not contain logic, instead of that import the hook to use logic
 */