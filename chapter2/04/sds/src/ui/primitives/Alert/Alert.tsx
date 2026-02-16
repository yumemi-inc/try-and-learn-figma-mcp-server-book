import clsx from "clsx";
import { IconAlertTriangle, IconInfo } from "icons";
import { ReactNode } from "react";
import "./alert.css";

export type AlertVariant = "info" | "warning";

export type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /** メッセージ内容 */
  children: ReactNode;
  /** 見た目のバリアント（info: 情報、warning: 警告） */
  variant?: AlertVariant;
  /** 左側に表示するアイコン。省略時は variant に応じたデフォルトアイコン */
  icon?: ReactNode;
};

export function Alert({
  children,
  className,
  variant = "info",
  icon,
  ...props
}: AlertProps) {
  const defaultIcon =
    variant === "warning" ? (
      <IconAlertTriangle size="20" />
    ) : (
      <IconInfo size="20" />
    );
  const iconNode = icon !== undefined ? icon : defaultIcon;

  const classNames = clsx(
    className,
    "alert",
    `alert-variant-${variant}`,
  );

  return (
    <div className={classNames} role="alert" {...props}>
      <span className="alert-icon">{iconNode}</span>
      <div className="alert-content">{children}</div>
    </div>
  );
}
