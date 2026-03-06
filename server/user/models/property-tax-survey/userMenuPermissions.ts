import { UserActionsModel } from "database/models/mc_user_actions";

export async function userMenuPermission(
  userId: number | string | null,
  withoutKeyData: any = null
): Promise<Record<string, any> | any[]> {
  const selectedMenuLs: any = withoutKeyData ? [] : {};

  const records:any = await UserActionsModel.findAll({
    where: {
      User_Id: userId,
    },
    attributes: ["Menu_Id"],
    raw: true,
  });

  if (records && records.length > 0) {
    for (const row of records) {
      const menuId = row.Menu_Id;

      if (!withoutKeyData) {
        selectedMenuLs[menuId] = menuId;
      } else {
        selectedMenuLs.push(menuId);
      }
    }
  }

  return selectedMenuLs;
}
