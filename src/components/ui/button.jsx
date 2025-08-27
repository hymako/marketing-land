export function Button({ className = '', variant = 'default', size = 'md', ...props }) {
    const base = 'inline-flex items-center justify-center font-medium transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        default: 'bg-black text-white hover:opacity-90 focus:ring-black',
        outline: 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50 focus:ring-neutral-300',
        ghost: 'text-neutral-900 hover:bg-neutral-100',
    };
    const sizes = { sm:'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-5 py-3 text-base' };
    return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}