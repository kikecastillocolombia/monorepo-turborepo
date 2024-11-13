"use client"
function Page() {
  return (
    <div>
      <button onClick={async () => {
        const response = await fetch("/api");
        const data = await response.text();
        console.log(data);
      }}>
        Click Me
      </button>
    </div>
  );
}

export default Page;
