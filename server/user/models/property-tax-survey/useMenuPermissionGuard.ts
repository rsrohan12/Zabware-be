import { MenuPermissionEnum } from "helpers/enums";
import { userMenuPermission } from "./userMenuPermissions";

export async function userMenuPermissionGuard(
  userId: number | string | null,
  permission: string | number | null
): Promise<boolean> {
  const userMenuPerm = await userMenuPermission(userId, null);

  return Object.prototype.hasOwnProperty.call(
    userMenuPerm,
    permission as any
  );
}


export async function getPtsPermissions(
  uid: number | string,
  paperMode?: string
) {
  let editPerm = MenuPermissionEnum.PTS_EDIT;
  let addPerm = MenuPermissionEnum.PTS_ADD;
  let viewPerm = MenuPermissionEnum.PTS_VIEW;

  if (paperMode === "a2") {
    editPerm = MenuPermissionEnum.PTS_NEW_ID_EDIT;
    addPerm = MenuPermissionEnum.PTS_NEW_ID_ADD;
    viewPerm = MenuPermissionEnum.PTS_NEW_ID_VIEW;
  } else if (paperMode === "pmidc-excel") {
    editPerm = MenuPermissionEnum.PTS_EXCEL_EDIT;
    addPerm = MenuPermissionEnum.PTS_EXCEL_ADD;
    viewPerm = MenuPermissionEnum.PTS_EXCEL_VIEW;
  } else if (paperMode === "a3") {
    editPerm = MenuPermissionEnum.PTS_A3_EDIT;
    addPerm = MenuPermissionEnum.PTS_A3_ADD;
    viewPerm = MenuPermissionEnum.PTS_A3_VIEW;
  }

  const edit_permission_granted = await userMenuPermissionGuard(
    uid,
    editPerm
  );

  const add_permission_granted = await userMenuPermissionGuard(
    uid,
    addPerm
  );

  const view_permission_granted = await userMenuPermissionGuard(
    uid,
    viewPerm
  );

  return {
    edit_permission_granted,
    add_permission_granted,
    view_permission_granted,
  };
}
