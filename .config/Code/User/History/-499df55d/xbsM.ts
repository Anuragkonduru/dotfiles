export function getAllProducts:any = async (_req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: unknown): void; new(): any; }; }; }) => {
  try {
    const data = await getAllProducts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}