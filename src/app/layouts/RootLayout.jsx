export function Schema({ data }) {
  if (data)
    return (
      <script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );

  return null;
}
