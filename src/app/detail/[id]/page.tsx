interface DetailIdPageProps {
  params: Promise<{ id: string }>;
}

const DetailIdpage = async ({ params }: DetailIdPageProps) => {
  const { id } = await params;
  console.log("~DetailPage ~ id", id);
  return <div>Detailpage</div>;
};

export default DetailIdpage;
