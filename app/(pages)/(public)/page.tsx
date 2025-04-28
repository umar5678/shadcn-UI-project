export default function Home() {
  return (
    <div className="  mx-auto">
      {/* Hero section */}

      <main className="flex-1 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="text-muted-foreground">
          This is a demo page showing the responsive header in action. Resize
          your browser to see how it adapts.
        </p>

        {/* Demo content */}
        <div className="grid gap-6 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Content Section {i + 1}
              </h2>
              <p>
                This is some placeholder content to demonstrate the header's
                sticky behavior.
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Content Section {i + 1}
              </h2>
              <p>
                This is some placeholder content to demonstrate the header's
                sticky behavior.
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Content Section {i + 1}
              </h2>
              <p>
                This is some placeholder content to demonstrate the header's
                sticky behavior.
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">
                Content Section {i + 1}
              </h2>
              <p>
                This is some placeholder content to demonstrate the header's
                sticky behavior.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
