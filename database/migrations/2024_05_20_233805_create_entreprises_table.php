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
        Schema::create('entreprises', function (Blueprint $table) {

            $table->id(); // Primary key
            $table->string('name'); // Company name
            $table->foreignId('users_id')->constrained('users')->onDelete('cascade'); // Foreign key to users table
            $table->string('raison'); // Raison (legal reason or purpose)
            $table->string('email')->unique(); // Email
            $table->string('site')->nullable(); // Website (nullable)
            $table->string('logo')->nullable(); // Logo (nullable)
            $table->boolean('status')->default(1); // Status (default to 1)
            $table->string('representant'); // Representative
            $table->string('tele1'); // Telephone 1
            $table->string('tele2')->nullable(); // Telephone 2 (nullable)
            $table->string('tele3')->nullable(); 
            $table->string('password');

            $table->timestamps();

        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entreprises');
    }
};
