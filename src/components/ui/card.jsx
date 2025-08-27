export function Card({ className = '', ...props }) {
    return <div className={`bg-white border border-neutral-200 rounded-2xl ${className}`} {...props} />;
}
export function CardHeader({ className = '', ...props }) { return <div className={`px-5 pt-5 ${className}`} {...props} />; }
export function CardTitle({ className = '', ...props }) { return <h3 className={`text-lg font-semibold ${className}`} {...props} />; }
export function CardContent({ className = '', ...props }) { return <div className={`px-5 pb-5 ${className}`} {...props} />; }