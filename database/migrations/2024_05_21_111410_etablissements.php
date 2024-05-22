<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('etablissements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('users_id')->nullable();
            $table->unsignedBigInteger('regions_id');
            $table->string('nom_efp');
            $table->string('adresse')->nullable();
            $table->string('tel')->nullable();
            $table->string('ville')->nullable();
            $table->string('status')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();

            // Foreign key constraints
            $table->foreign('users_id')->references('id')->on('users');
            $table->foreign('regions_id')->references('id')->on('regions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
