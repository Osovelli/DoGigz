export default function FeatureCard({ icon, title, description, iconColor, className}) {
    return (
      <div className={`flex flex-col items-center rounded-lg p-4 text-center ${className}`}>
        <div className={`${iconColor} mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary}`}>
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }