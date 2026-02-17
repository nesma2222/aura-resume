export default function TemplateTwo({ data }) {

  return (
    <div className="bg-peach-50 p-6 rounded-xl">

      <h1 className="text-xl font-bold text-peach-600">
        {data.firstName} {data.lastName}
      </h1>

      <p>{data.email}</p>
      <p>{data.phone}</p>

      <hr className="my-4" />

      <p>{data.experience}</p>

    </div>
  );
}
