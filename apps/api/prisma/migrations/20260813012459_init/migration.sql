-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "role_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT,
    "birth_date" TEXT,
    "profile_picture_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "venues" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "has_assigned_seats" BOOLEAN NOT NULL DEFAULT false,
    "total_capacity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "seats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "venue_id" TEXT NOT NULL,
    "row_label" TEXT NOT NULL,
    "seat_number" INTEGER NOT NULL,
    "grid_x" INTEGER NOT NULL,
    "grid_y" INTEGER NOT NULL,
    "seat_type" TEXT NOT NULL DEFAULT 'STANDARD',
    CONSTRAINT "seats_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "venues" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizer_id" TEXT NOT NULL,
    "venue_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "banner_url" TEXT,
    "event_type" TEXT NOT NULL,
    "start_time" DATETIME NOT NULL,
    "external_api_source" TEXT,
    "external_api_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "events_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "events_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "venues" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "event_seats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_id" TEXT NOT NULL,
    "seat_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "reserved_by_id" TEXT,
    "reservation_expires_at" DATETIME,
    CONSTRAINT "event_seats_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_seats_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "seats" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_seats_reserved_by_id_fkey" FOREIGN KEY ("reserved_by_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "event_gatekeepers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_id" TEXT NOT NULL,
    "gatekeeper_id" TEXT NOT NULL,
    "assigned_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "event_gatekeepers_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "event_gatekeepers_gatekeeper_id_fkey" FOREIGN KEY ("gatekeeper_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ticket_types" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "quantity_available" INTEGER NOT NULL,
    CONSTRAINT "ticket_types_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_id" TEXT NOT NULL,
    "ticket_type_id" TEXT NOT NULL,
    "buyer_id" TEXT NOT NULL,
    "seat_id" TEXT,
    "buyer_name" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,
    "qr_code_token" TEXT NOT NULL,
    "share_token" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'VALID',
    "validated_at" DATETIME,
    "validated_by_id" TEXT,
    "purchased_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tickets_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tickets_ticket_type_id_fkey" FOREIGN KEY ("ticket_type_id") REFERENCES "ticket_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tickets_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tickets_seat_id_fkey" FOREIGN KEY ("seat_id") REFERENCES "seats" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tickets_validated_by_id_fkey" FOREIGN KEY ("validated_by_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE INDEX "users_role_id_idx" ON "users"("role_id");

-- CreateIndex
CREATE INDEX "seats_venue_id_idx" ON "seats"("venue_id");

-- CreateIndex
CREATE UNIQUE INDEX "seats_venue_id_row_label_seat_number_key" ON "seats"("venue_id", "row_label", "seat_number");

-- CreateIndex
CREATE INDEX "events_organizer_id_idx" ON "events"("organizer_id");

-- CreateIndex
CREATE INDEX "event_seats_event_id_status_idx" ON "event_seats"("event_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "event_seats_event_id_seat_id_key" ON "event_seats"("event_id", "seat_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_gatekeepers_event_id_gatekeeper_id_key" ON "event_gatekeepers"("event_id", "gatekeeper_id");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_access_code_key" ON "tickets"("access_code");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_qr_code_token_key" ON "tickets"("qr_code_token");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_share_token_key" ON "tickets"("share_token");

-- CreateIndex
CREATE INDEX "tickets_buyer_id_idx" ON "tickets"("buyer_id");

-- CreateIndex
CREATE INDEX "tickets_event_id_idx" ON "tickets"("event_id");

-- CreateIndex
CREATE INDEX "tickets_access_code_idx" ON "tickets"("access_code");

-- CreateIndex
CREATE INDEX "tickets_qr_code_token_idx" ON "tickets"("qr_code_token");

-- CreateIndex
CREATE INDEX "tickets_share_token_idx" ON "tickets"("share_token");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_event_id_seat_id_key" ON "tickets"("event_id", "seat_id");
