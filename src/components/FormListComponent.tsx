import { useQuery } from "@tanstack/react-query";

export default function ListComponent() {
  const query = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/reports");
      const data = await response.json();
      return data;
    },
  });

  const { error, isLoading } = useQuery({
    queryKey: ["reports"],
  });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {query.data?.length > 0 ? (
            <ul>
              {query.data.map((report) => (
                <li key={report.id}>
                  {report.name} - {report.task}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reports found</p>
          )}
        </>
      )}
    </>
  );
}
